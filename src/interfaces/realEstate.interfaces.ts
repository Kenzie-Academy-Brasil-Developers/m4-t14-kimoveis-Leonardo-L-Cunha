import { RealEstateSchema, CreateRealEstateSchema, CompleteRealEstateSchema, ReturnCompleteRealEstateSchema } from '../schema/realEstate.schema'
import { z } from 'zod'

type IrealEstateReturn = z.infer<typeof RealEstateSchema>
type IrealEstateCreate = z.infer<typeof CreateRealEstateSchema>
type IcompleteRealEstate = z.infer<typeof CompleteRealEstateSchema>
type IreturnCompleteRealEstate = z.infer<typeof ReturnCompleteRealEstateSchema>


export {
    IrealEstateReturn,
    IrealEstateCreate,
    IcompleteRealEstate,
    IreturnCompleteRealEstate
}