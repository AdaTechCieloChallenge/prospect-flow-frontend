import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";

import {Button} from "@/components/ui/button.tsx";


const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `mock.${a.length - i}`
)

export function DisplayEnqueuedProspectsComponent() {
    return (
        <Card className="w-[500px]">
            <CardHeader>
                <CardTitle>Prospectos em espera</CardTitle>
                <CardDescription>Fila de atendimento</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-72 w-48 rounded-md border">
                    <div className="p-4">
                        <h4 className="mb-4 text-sm font-medium leading-none">Clientes</h4>
                        {tags.map((tag) => (
                            <>
                                <div key={tag} className="text-sm">
                                    {tag}
                                </div>
                                <Separator className="my-2" />
                            </>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>CHAMAR O PRÓXIMO</Button>
            </CardFooter>
        </Card>
    )
}
