import { IsInt, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
	@IsString()
	@MinLength(1)
	title: string;

	@IsOptional()
	@IsString()
	description?: string;

	@IsOptional()
	@IsString()
	status?: string; // e.g., "TODO" | "IN_PROGRESS" | "DONE"

	@IsOptional()
	@IsInt()
	userId?: number;
}
