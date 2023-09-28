import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FindClientComponent() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Consultar Prospecto</CardTitle>
        <CardDescription>Encontre seu prospecto em um clique.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">CPF ou CNPJ</Label>
              <Input id="name" placeholder="CPF / CNPJ" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Tipo</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Pessoa Física" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Pessoa Jurídica</SelectItem>
                  <SelectItem value="sveltekit">Pessoa Física</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancelar</Button>
        <Button>Consultar</Button>
      </CardFooter>
    </Card>
  );
}
