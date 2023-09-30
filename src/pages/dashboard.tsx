import { ProspectForm } from '@/components/prospect-form'
import { RemoveProspectModal } from '@/components/remove-prospect-modal'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useProspects } from '@/hooks/queries/prospects'
import { api } from '@/lib/axios'
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog'
import { Separator } from '@radix-ui/react-separator'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMediaQuery } from '@uidotdev/usehooks'
import { FileText, PlusIcon, Save, Edit2, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'react-toastify'

export function Dashboard() {
    const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)')
    const [openAddModal, setOpenAddModal] = useState<boolean>(false)
    const [openEditModal, setOpenEditModal] = useState<boolean>(false)
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
    const { data: prospects } = useProspects()
    const queryClient = useQueryClient()

    const consumeProspect = useMutation({
        mutationFn: () => {
            return api.get('consume-prospect')
        },
        onSuccess: () => {
            toast.success('Processado.', {
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

    const handleProcess = () => {
        consumeProspect.mutate()

        if (prospects?.length === 0) {
            toast.info('A fila está vazia.', {
                position: 'bottom-right',
                theme: 'colored',
            })
        }
    }

    // @ts-ignore
    // @ts-ignore
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Card className="flex flex-col w-[90%] lg:w-[64rem] flex-1  m-5 lg:m-4 p-[2rem] max-h-[96vh] ">
                <header className="flex justify-between items-end mb-4">
                    <div className="flex gap-2 text-primary items-center">
                        <FileText size="16" />
                        <h2 className="font-bold uppercase text-[#231F20] text-sm">
                            Prospectos
                        </h2>
                    </div>
                    <div className="flex gap-2">
                        <Dialog open={openAddModal}>
                            <DialogTrigger>
                                <Button
                                    size={isSmallDevice ? 'icon' : 'default'}
                                    className="rounded"
                                    onClick={() => setOpenAddModal(true)}
                                >
                                    <span className="hidden md:block">Adicionar</span>
                                    <PlusIcon className="block md:hidden" />
                                </Button>
                            </DialogTrigger>
                            <ProspectForm onClose={() => setOpenAddModal(false)} />
                        </Dialog>
                        <Button
                            size={isSmallDevice ? 'icon' : 'default'}
                            className="rounded"
                            onClick={handleProcess}
                        >
                            <span className="hidden md:block">Processar</span>
                            <Save className="block md:hidden" />
                        </Button>
                    </div>
                </header>
                <Separator />

                <section className="flex-1 py-4 overflow-auto">
                    <div className="overflow-auto ">
                        <table className="w-full">
                            <thead>
                            <tr className="text-sm md:text-xs lg:text-[12px] text-left text-[#231F20] whitespace-nowrap">
                                <th className="px-4 py-2 ">CNPJ</th>
                                <th className="px-4 py-2">Razão Social</th>
                                <th className="px-4 py-2">MCC</th>
                                <th className="px-4 py-2">CPF</th>
                                <th className="px-4 py-2">Nome</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2" />
                            </tr>
                            </thead>
                            <tbody>
                            {prospects &&
                                prospects
                                    .sort(
                                        (a, b) =>
                                            Date.parse(a.updatedAt) - Date.parse(b.updatedAt),
                                    )
                                    .map((prospect) => (
                                        <tr
                                            key={prospect.uuid}
                                            className="text-sm md:text-xs lg:text-[10px] text-[#54646E] whitespace-nowrap"
                                        >
                                            <td className="border px-4 py-2">
                                                {prospect.cnpj || '-'}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {prospect.corporateName || '-'}
                                            </td>
                                            <td className="border px-4 py-2">{prospect.mcc}</td>
                                            <td className="border px-4 py-2">{prospect.cpf}</td>
                                            <td className="border px-4 py-2">{prospect.name}</td>
                                            <td className="border px-4 py-2">{prospect.email}</td>
                                            <td className="flex justify-around border px-4 py-2">
                                                <Dialog open={openEditModal}>
                                                    <DialogTrigger>
                                                        <Button
                                                            variant="link"
                                                            size={'icon'}
                                                            onClick={() => setOpenEditModal(true)}
                                                            className="text-[#54646E] hover:text-primary transition duration-300"
                                                        >
                                                            <Edit2 size="16" />
                                                        </Button>
                                                    </DialogTrigger>
                                                    <ProspectForm
                                                        prospect={prospect}
                                                        onClose={() => setOpenEditModal(false)}
                                                    />
                                                </Dialog>

                                                <Dialog open={openDeleteModal}>
                                                    <DialogTrigger>
                                                        <Button
                                                            variant="link"
                                                            size={'icon'}
                                                            className="text-[#54646E] hover:text-primary transition duration-300"
                                                            onClick={() => setOpenDeleteModal(true)}
                                                        >
                                                            <Trash2 size="16" />
                                                        </Button>
                                                    </DialogTrigger>
                                                    <RemoveProspectModal
                                                        document={prospect.cnpj || prospect.cpf}
                                                        onClose={() => setOpenDeleteModal(false)}
                                                    />
                                                </Dialog>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </Card>
        </div>
    )
}
