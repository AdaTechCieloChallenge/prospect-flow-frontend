import { api } from '@/lib/axios'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { z } from 'zod'

//Clent-Side Validation with Zod
const prospectSchema = z.object({
    uuid: z.string(),
    cnpj: z.string().optional(),
    corporateName: z.string().optional(),
    cpf: z.string(),
    name: z.string(),
    email: z.string(),
    mcc: z.string(),
    type: z.string(),
    version: z.number(),
    updatedAt: z.string(),
    createdAt: z.string(),
})

type Prospect = z.infer<typeof prospectSchema>

export type ProspectsQueryKey = ['prospects']

async function getProspects() {
    const { data } = await api.get('/prospects')

    return data
}

export const useProspects = <TData = Prospect[]>(
    options: UseQueryOptions<
        { prospects: Prospect[] },
        unknown,
        TData,
        ProspectsQueryKey
    > = {},
) => {
    return useQuery({
        queryKey: ['prospects'],
        queryFn: getProspects,
        ...options,
    })
}
