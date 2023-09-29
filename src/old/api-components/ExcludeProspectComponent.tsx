import { Button } from "@/components/ui/button.tsx"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Label } from "@/components/ui/label.tsx"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs.tsx"


import { Checkbox } from "@/components/ui/checkbox.tsx"

export function ExcludeProspectComponent() {
    return (
        <Tabs defaultValue="pf" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="pf">Pessoa Física</TabsTrigger>
                <TabsTrigger value="pj">Pessoa Jurídica</TabsTrigger>
            </TabsList>
            <TabsContent value="pf">
                <Card>
                    <CardHeader>
                        <CardTitle>Pessoa Física</CardTitle>
                        <CardDescription>
                            Exclusão.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="cpf">CPF</Label>
                            <Input id="cpf" defaultValue="Insira apenas números" />
                            <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >

                                        Estou ciente de que esta operação é irreversível.
                                </label>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Excluir</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="pj">
                <Card>
                    <CardHeader>
                        <CardTitle>Pessoa Jurídica</CardTitle>
                        <CardDescription>
                            Exclusão.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="cnpj">CNPJ</Label>
                            <Input id="cnpj" defaultValue="Insira apenas números" />
                        </div>
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Eu estou ciente de que essa operação é irreversível.
                        </label>
                    </CardContent>
                    <CardFooter>
                        <Button>Cadastrar</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}