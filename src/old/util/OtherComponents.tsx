// //Componemte de NaturalPersonform.
// import {useState} from "react";
// import {z} from "zod";
// import {Form, useForm} from "react-hook-form";
// import {zodResolver} from "@hookform/resolvers/zod";
// import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
// import {Input} from "postcss";
// import {Button} from "@/components/ui/button.tsx";
//
// export function PFFormWithClientSideValidation() {
//     const [errorMessageCpf, setErrorMessageCpf] = useState('');
//     const [errorMessageName, setErrorMessageName] = useState('');
//     const [errorMessageEmail, setErrorMessageEmail] = useState('');
//     const [errorMessageMcc, setErrorMessageMcc] = useState('');
//
//     //Definindo o schema do formulário (modularizando aqui todas as regras que ele deve seguir)
//     const formSchema = z.object({
//         cpf: z.string().min(2, {
//             message: "*CPF deve conter 11 dígitos.",
//         }).max(11, {message: "*CPF deve conter 11 dígitos."}),
//
//         name:  z.string().min(1, {
//             message: "*Nome deve conter pelo menos 1 caracter.",
//         }).max(50, {message: "*Nome deve conter no máximo 50 caracteres."}),
//
//         email: z.string().min(6, {
//             message: "*Email inválido.",
//         }),
//
//         mcc: z.string().min(1, {
//             message: "*MCC deve conter pelo menos 1 dígito.",
//         }).max(4, {message: "*MCC deve conter no máximo 4 dígitos."}),
//
//     })
//
//     // Definindo o formulário
//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             cpf: "",
//             name: "",
//             email: "",
//             mcc: "",
//         },
//     })
//
//     function isValidCPF(input: string): boolean {
//         const regex = /^\d{11}$/;
//         return regex.test(input);
//     }
//
//     function isValidName(input: string): boolean {
//         const regex = /^[a-zA-Z\s']{1,50}$/;
//         return regex.test(input);
//     }
//
//     function isValidEmail(input: string): boolean {
//         const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
//         return regex.test(input);
//     }
//
//     function isValidMCC(input: string): boolean {
//         const regex = /^\d{4}$/;
//         return regex.test(input);
//     }
//
//     // Definindo o handler de submissão.
//     function submitHandler(values: z.infer<typeof formSchema>) {
//         // ✅ This will be type-safe and validated.
//         console.log(values.cpf)
//         console.log(values.name)
//         console.log(values.email)
//         console.log(values.mcc)
//
//         if(!isValidCPF(values.cpf))
//             setErrorMessageCpf("*CPF deve conter 11 dígitos.")
//         else
//             setErrorMessageCpf('')
//
//         if(!isValidName(values.name))
//             setErrorMessageName("*Nome deve conter no máximo 50 caracteres.")
//         else
//             setErrorMessageName('')
//
//         if(!isValidEmail(values.name))
//             setErrorMessageEmail("*Email inválido.")
//         else
//             setErrorMessageEmail('')
//
//         if(!isValidMCC(values.mcc))
//             setErrorMessageMcc("*MCC deve conter no máximo 4 dígitos.")
//         else
//             setErrorMessageMcc('')
//
//     }
//
//     return(
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-8">
//                 <FormField
//                     control={form.control}
//                     name="cpf"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>CPF</FormLabel>
//                             <FormControl>
//                                 <Input
//                                     placeholder="Insira apenas os números" {...field} />
//                             </FormControl>
//                             <FormMessage>{errorMessageCpf}</FormMessage>
//                         </FormItem>
//                     )}
//                 />
//                 <FormField
//                     control={form.control}
//                     name="name"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>Nome</FormLabel>
//                             <FormControl>
//                                 <Input
//                                     placeholder="Insira um nome" {...field} />
//                             </FormControl>
//                             <FormMessage>{errorMessageName}</FormMessage>
//                         </FormItem>
//                     )}
//                 />
//                 <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>E-mail</FormLabel>
//                             <FormControl>
//                                 <Input
//                                     placeholder="Insira um e-mail" {...field} />
//                             </FormControl>
//                             <FormMessage>{errorMessageEmail}</FormMessage>
//                         </FormItem>
//                     )}
//                 />
//                 <FormField
//                     control={form.control}
//                     name="mcc"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>MCC</FormLabel>
//                             <FormControl>
//                                 <Input
//                                     placeholder="Insira apenas os números" {...field} />
//                             </FormControl>
//                             <FormMessage>{errorMessageMcc}</FormMessage>
//                         </FormItem>
//                     )}
//                 />
//                 <Button type="submit">Cadastrar Pessoa Física</Button>
//             </form>
//         </Form>
//     )
// }
//
//
// //Componente de LegalPerson Registration
// export function PJFormWithClientSideValidation() {
//     const [errorMessageCnpj, setErrorMessageCnpj] = useState('');
//     const [errorMessageCorporateName, setErrorMessageCorporateName] = useState('');
//     const [errorMessageCpf, setErrorMessageCpf] = useState('');
//     const [errorMessageName, setErrorMessageName] = useState('');
//     const [errorMessageEmail, setErrorMessageEmail] = useState('');
//     const [errorMessageMcc, setErrorMessageMcc] = useState('');
//
//     //Definindo o schema do formulário (modularizando aqui todas as regras que ele deve seguir)
//     const formSchema = z.object({
//         cnpj: z.string().min(2, {
//             message: "*CNPJ deve conter 14 dígitos.",
//         }).max(14, {message: "*CNPJ deve conter 14 dígitos."}),
//
//         corporateName: z.string().min(1, {
//             message: "*Nome deve conter pelo menos 1 caracter.",
//         }).max(50, {message: "*Razão social deve conter no máximo 50 caracteres."}),
//
//         cpf: z.string().min(2, {
//             message: "*CPF deve conter 11 dígitos.",
//         }).max(11, {message: "*CPF deve conter 11 dígitos."}),
//
//         name:  z.string().min(1, {
//             message: "*Nome deve conter pelo menos 1 caracter.",
//         }).max(50, {message: "*Nome deve conter no máximo 50 caracteres."}),
//
//         email: z.string().min(6, {
//             message: "*Email inválido.",
//         }),
//
//         mcc: z.string().min(1, {
//             message: "*MCC deve conter pelo menos 1 dígito.",
//         }).max(4, {message: "*MCC deve conter no máximo 4 dígitos."}),
//
//     })
//
//     // Definindo o formulário
//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             cnpj: "",
//             corporateName: "",
//             cpf: "",
//             name: "",
//             email: "",
//             mcc: "",
//         },
//     })
//
//     function isValidCNPJ(input: string): boolean {
//         const regex = /^\d{14}$/;
//         return regex.test(input);
//     }
//
//     function isValidCorporateName(input: string): boolean {
//         const regex = /^\d{50}$/;
//         return regex.test(input);
//     }
//     function isValidCPF(input: string): boolean {
//         const regex = /^\d{11}$/;
//         return regex.test(input);
//     }
//
//     function isValidName(input: string): boolean {
//         const regex = /^[a-zA-Z\s']{1,50}$/;
//         return regex.test(input);
//     }
//
//     function isValidEmail(input: string): boolean {
//         const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
//         return regex.test(input);
//     }
//
//     function isValidMCC(input: string): boolean {
//         const regex = /^\d{4}$/;
//         return regex.test(input);
//     }
//
//     // Definindo o handler de submissão.
//     function submitHandler(values: z.infer<typeof formSchema>) {
//         // ✅ This will be type-safe and validated.
//         console.log(values.cnpj)
//         console.log(values.corporateName)
//         console.log(values.cpf)
//         console.log(values.name)
//         console.log(values.email)
//         console.log(values.mcc)
//
//         if(!isValidCNPJ(values.cnpj))
//             setErrorMessageCnpj("*CNPJ deve conter 14 dígitos.")
//         else
//             setErrorMessageCnpj('')
//
//         if(!isValidCorporateName(values.cpf))
//             setErrorMessageCorporateName("*Razão social deve conter no máximo 50 caracteres.")
//         else
//             setErrorMessageCorporateName('')
//
//         if(!isValidCPF(values.cpf))
//             setErrorMessageCpf("*CPF deve conter 11 dígitos.")
//         else
//             setErrorMessageCpf('')
//
//         if(!isValidName(values.name))
//             setErrorMessageName("*Nome deve conter no máximo 50 caracteres.")
//         else
//             setErrorMessageName('')
//
//         if(!isValidEmail(values.name))
//             setErrorMessageEmail("*Email inválido.")
//         else
//             setErrorMessageEmail('')
//
//         if(!isValidMCC(values.mcc))
//             setErrorMessageMcc("*MCC deve conter no máximo 4 dígitos.")
//         else
//             setErrorMessageMcc('')
//
//
//         //Se tudo for válido, chamar a api!
//         //TODO
//
//     }
//
//     return(
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-8">
//                 <FormField
//                     control={form.control}
//                     name="cnpj"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>CNPJ</FormLabel>
//                             <FormControl>
//                                 <Input
//                                     placeholder="Insira apenas os números" {...field} />
//                             </FormControl>
//                             <FormMessage>{errorMessageCnpj}</FormMessage>
//                         </FormItem>
//                     )}
//                 />
//                 <FormField
//                     control={form.control}
//                     name="corporateName"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>Razão Social</FormLabel>
//                             <FormControl>
//                                 <Input
//                                     placeholder="Insira o nome da empresa" {...field} />
//                             </FormControl>
//                             <FormMessage>{errorMessageCorporateName}</FormMessage>
//                         </FormItem>
//                     )}
//                 />
//                 <FormField
//                     control={form.control}
//                     name="cpf"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>CPF</FormLabel>
//                             <FormControl>
//                                 <Input
//                                     placeholder="Insira apenas os números" {...field} />
//                             </FormControl>
//                             <FormMessage>{errorMessageCpf}</FormMessage>
//                         </FormItem>
//                     )}
//                 />
//                 <FormField
//                     control={form.control}
//                     name="name"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>Nome</FormLabel>
//                             <FormControl>
//                                 <Input
//                                     placeholder="Insira um nome" {...field} />
//                             </FormControl>
//                             <FormMessage>{errorMessageName}</FormMessage>
//                         </FormItem>
//                     )}
//                 />
//                 <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>E-mail</FormLabel>
//                             <FormControl>
//                                 <Input
//                                     placeholder="Insira um e-mail" {...field} />
//                             </FormControl>
//                             <FormMessage>{errorMessageEmail}</FormMessage>
//                         </FormItem>
//                     )}
//                 />
//                 <FormField
//                     control={form.control}
//                     name="mcc"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>MCC</FormLabel>
//                             <FormControl>
//                                 <Input
//                                     placeholder="Insira apenas os números" {...field} />
//                             </FormControl>
//                             <FormMessage>{errorMessageMcc}</FormMessage>
//                         </FormItem>
//                     )}
//                 />
//                 <Button type="submit">Cadastrar Pessoa Jurídica</Button>
//             </form>
//         </Form>
//     )
// }