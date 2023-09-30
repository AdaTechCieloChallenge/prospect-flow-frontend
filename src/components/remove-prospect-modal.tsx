import { AlertCircle } from 'lucide-react'
import { Button } from './ui/button'
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from './ui/dialog'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { api } from '@/lib/axios'

interface RemoveProspectModalProps {
    document: string
    onClose: () => void
}

export function RemoveProspectModal({
                                        document,
                                        onClose,
                                    }: RemoveProspectModalProps) {
    const queryClient = useQueryClient()

    const deleteProspect = useMutation({
        mutationFn: () => {
            return api.delete(
                `delete/${document}/${document.length === 14 ? 'pj' : 'pf'}`,
            )
        },
        onSuccess: () => {
            toast.success('Removido.', {
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

    const handleDelete = () => {
        deleteProspect.mutate()
        onClose()
    }

    return (
        <DialogContent className="bg-white max-w-sm flex flex-col">
            <DialogHeader>
                <DialogTitle className="text-[#231F20]">Você tem certeza?</DialogTitle>
                <DialogDescription className="text-[##231F20]">
                    Esta ação não pode ser desfeita.
                </DialogDescription>
            </DialogHeader>
            <AlertCircle className="mx-auto text-[#E0004D]" size={56} />
            <div className="flex justify-between items-center">
                <Button
                    type="button"
                    className="text-primary hover:text-primary rounded"
                    variant={'outline'}
                    onClick={() => onClose()}
                >
                    Cancelar
                </Button>
                <Button
                    type="button"
                    variant="destructive"
                    className="rounded"
                    onClick={handleDelete}
                >
                    Excluir
                </Button>
            </div>
        </DialogContent>
    )
}
