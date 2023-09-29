import { AlertCircle } from 'lucide-react'
import { Button } from './ui/button'
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from './ui/dialog'

export function RemoveProspectModal() {
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
                >
                    Cancelar
                </Button>
                <Button type="button" variant="destructive" className="rounded">
                    Excluir
                </Button>
            </div>
        </DialogContent>
    )
}
