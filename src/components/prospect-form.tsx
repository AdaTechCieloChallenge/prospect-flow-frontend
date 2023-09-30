import {
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Input } from './ui/input'
import { z } from 'zod'
import { Separator } from './ui/separator'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from '@radix-ui/react-label'
import { Edit2, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { toast } from 'react-toastify'

const NaturalPersonProspectSchema = z.object({
    mcc: z.string().max(4),
    cpf: z.string().length(11),
    name: z.string().max(50),
    email: z.string().email(),
})

type NaturalPersonProspect = z.infer<typeof NaturalPersonProspectSchema>

const LegalPersonProspectSchema = z.object({
    cnpj: z.string().length(14),
    corporateName: z.string().max(50),
    mcc: z.string().max(4),
    cpf: z.string().length(11),
    name: z.string().max(50),
    email: z.string().email(),
})

type LegalPersonProspect = z.infer<typeof LegalPersonProspectSchema>

interface ProspectFormProps {
    prospect?: NaturalPersonProspect | LegalPersonProspect
    onClose: () => void
}

interface ProspectFormInput extends LegalPersonProspect {}

const defaultNaturalValues: NaturalPersonProspect = {
    mcc: '',
    cpf: '',
    name: '',
    email: '',
}

const defaultLegalValues: LegalPersonProspect = {
    cnpj: '',
    corporateName: '',
    mcc: '',
    cpf: '',
    name: '',
    email: '',
}

function getDefaultValues(
    mode: 'PF' | 'PJ',
    prospect?: NaturalPersonProspect | LegalPersonProspect,
) {
    switch (mode) {
        case 'PF': {
            return prospect || defaultNaturalValues
        }

        case 'PJ': {
            return prospect || defaultLegalValues
        }
    }
}

function isCorporateProspect(
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    prospect: any,
): prospect is { cnpj: string; corporateName: string } {
    return 'cnpj' in prospect && 'corporateName' in prospect
}

export function ProspectForm({ prospect, onClose }: ProspectFormProps) {
    const queryClient = useQueryClient()
    const [mode, setMode] = useState<'PF' | 'PJ'>(
        prospect
            ? isCorporateProspect(prospect) && prospect.corporateName
                ? 'PJ'
                : 'PF'
            : 'PF',
    )

    const isEditing = prospect

    const { register, handleSubmit, reset } = useForm<ProspectFormInput>({
        resolver:
            mode === 'PJ'
                ? zodResolver(LegalPersonProspectSchema)
                : zodResolver(NaturalPersonProspectSchema),
        defaultValues: getDefaultValues(mode, prospect),
    })

    const onSubmit = (data: ProspectFormInput) => {
        if (!prospect) {
            saveProspect.mutate(data)
        } else {
            updateProspect.mutate(data)
        }
        reset()
        onClose()
    }

    const saveProspect = useMutation({
        mutationFn: (data: ProspectFormInput) => {
            return mode === 'PJ'
                ? api.post('create-legal-person', data)
                : api.post('create-natural-person', data)
        },
        onSuccess: () => {
            toast.success('Cadastrado.', {
                position: 'bottom-right',
                theme: 'colored',
                autoClose: 3000,
            })
            queryClient.invalidateQueries(['prospects'])
        },
        onError: () => {
            toast.error('Houve um problema.', {
                position: 'bottom-right',
                theme: 'colored',
                autoClose: 3000,
            })
        },
    })

    const updateProspect = useMutation({
        mutationFn: (data: ProspectFormInput) => {
            return api.put('update', data, {
                params: {
                    cnpjOrCpf: data.cnpj || data.cpf,
                    clientType: data.cnpj ? 'pj' : 'pf',
                },
            })
        },
        onSuccess: () => {
            toast.success('Atualizado.', {
                position: 'bottom-right',
                theme: 'colored',
                autoClose: 3000,
            })
            queryClient.invalidateQueries(['prospects'])
        },
        onError: () => {
            toast.error('Houve um problema.', {
                position: 'bottom-right',
                theme: 'colored',
                autoClose: 3000,
            })
        },
    })

    return (
        <DialogContent className="bg-white gap-0 max-w-[90%]  md:max-w-fit">
            <DialogHeader>
                <DialogTitle className="font-bold uppercase text-[#231F20] text-sm flex items-center gap-1">
                    {!isEditing ? (
                        <Plus className="text-primary" size={14} />
                    ) : (
                        <Edit2 className="text-primary" size={14} />
                    )}
                    {`${!isEditing ? 'Novo' : 'Editar'} Prospecto`}
                </DialogTitle>
                <Separator />
            </DialogHeader>
            <RadioGroup
                onValueChange={(value) => setMode(value as 'PF' | 'PJ')}
                className="flex justify-end gap-2 mt-2"
                defaultValue={mode}
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="PJ" id="legal" />
                    <Label htmlFor="legal" className="text-[##231F20] text-[10px]">
                        PJ
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="PF" id="natural" />
                    <Label htmlFor="natural" className="text-[##231F20] text-[10px]">
                        PF
                    </Label>
                </div>
            </RadioGroup>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                {mode === 'PJ' && (
                    <>
                        <div>
                            <Label
                                htmlFor="corporate-name"
                                className="text-[#231F20] text-[10px] uppercase"
                            >
                                Razão Social
                            </Label>
                            <Input
                                placeholder={'Silva e Cia. Comércio de Eletrônicos Ltda.'}
                                className="placeholder:text-gray-300"
                                {...register('corporateName')}
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="cnpj"
                                className="text-[#231F20] text-[10px] uppercase"
                            >
                                CNPJ
                            </Label>
                            <Input
                                placeholder={'00.000.000/0000-00'}
                                className="placeholder:text-gray-300"
                                {...register('cnpj')}
                            />
                        </div>
                        <Separator className="my-4" />
                    </>
                )}
                <div>
                    <Label
                        htmlFor="name"
                        className="text-[#231F20] text-[10px] uppercase"
                    >
                        Nome
                    </Label>
                    <Input
                        placeholder={'João Silva'}
                        className="placeholder:text-gray-300"
                        {...register('name')}
                    />
                </div>
                <div className="flex gap-2">
                    <div>
                        <Label htmlFor="mcc" className="text-[#231F20] text-[10px]">
                            MCC
                        </Label>
                        <Input
                            placeholder={'1234'}
                            type={'number'}
                            min={1}
                            max={9999}
                            className="placeholder:text-gray-300"
                            {...register('mcc')}
                        />
                    </div>
                    <div>
                        <Label htmlFor="cpf" className="text-[#231F20] text-[10px]">
                            CPF
                        </Label>
                        <Input
                            placeholder={'000.000.000.00'}
                            className="placeholder:text-gray-300"
                            {...register('cpf')}
                        />
                    </div>

                    <div>
                        <Label htmlFor="email" className="uppercase text-[10px]">
                            Email
                        </Label>
                        <Input
                            placeholder={'joao.silva@email.com'}
                            type="email"
                            className="placeholder:text-gray-300"
                            {...register('email')}
                        />
                    </div>
                </div>

                <div className="flex justify-between gap-2">
                    <Button
                        type={'button'}
                        variant="outline"
                        className="rounded text-primary hover:text-primary"
                        onClick={() => onClose()}
                    >
                        Cancelar
                    </Button>
                    <Button className="rounded">
                        {prospect ? 'Editar' : 'Cadastrar'}
                    </Button>
                </div>
            </form>
        </DialogContent>
    )
}
