export interface IGame {
	id: string
	title: string
	image: string
	releaseDate: Date
	price: number
	rating: number
	ageRating: string
	developer: string
	publisher: string
	genres: EnumGenre[]
	platforms: EnumPlatform[]
	createdAt: Date
	updatedAt: Date
}

export enum EnumGenre {
	Action = 'Action',
	Adventure = 'Adventure',
	Horror = 'Horror',
	RPG = 'RPG',
	Shooter = 'Shooter'
}

export enum EnumPlatform {
	Nintendo = 'Nintendo',
	PC = 'PC',
	PlayStation = 'PlayStation',
	Xbox = 'Xbox'
}

export type TypePaginationGames = {
	length: number
	games: IGame[]
}
