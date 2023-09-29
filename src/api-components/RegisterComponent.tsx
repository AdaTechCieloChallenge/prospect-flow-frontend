import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export function RegisterComponent() {
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
                            Cadastrar.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="name">Nome</Label>
                            <Input id="name" defaultValue="" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="email">E-mail</Label>
                            <Input id="email" defaultValue="" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="cpf">CPF</Label>
                            <Input id="cpf" defaultValue="Insira apenas números" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="mcc">MCC</Label>
                            <Input id="mcc" defaultValue="" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Cadastrar</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="pj">
                <Card>
                    <CardHeader>
                        <CardTitle>Pessoa Jurídica</CardTitle>
                        <CardDescription>
                            Cadastrar.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="cnpj">CNPJ</Label>
                            <Input id="cnpj" defaultValue="Insira apenas números" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="corporateName">Razão Social</Label>
                            <Input id="corporateName" defaultValue="" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="name">Nome do contato</Label>
                            <Input id="name" defaultValue="" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="email">E-mail do contato</Label>
                            <Input id="email" defaultValue="" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="cpf">CPF do contato</Label>
                            <Input id="cpf" defaultValue="Insira apenas números" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="mcc">MCC</Label>
                            <Input id="mcc" defaultValue="" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Cadastrar</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
