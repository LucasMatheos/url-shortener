import { prop, Typegoose } from '@hasezoey/typegoose'

export class URL extends Typegoose {
	@prop({ required: true })
	public hash?: string

	@prop({ required: true })
	public originURL?: string

	@prop({ required: true })
	public shortURL?: string
}

export const URLModel = new URL().getModelForClass(URL)
