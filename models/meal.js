export default class Meal {
	constructor(
		id,
		categoryIds,
		title,
		affordibility,
		complexity,
		imageUrl,
		duration,
		ingredients,
		steps,
		isGlutenfree,
		isVegan,
		isVegetarian,
		isLactoseFree
	) {
		this.id = id;
		this.categoryIds = categoryIds;
		this.title = title;
		this.affordibility = affordibility;
		this.complexity = complexity;
		this.imageUrl = imageUrl;
		this.duration = duration;
		this.ingredients = ingredients;
		this.steps = steps;
		this.isGlutenfree = isGlutenfree;
		this.isVegan = isVegan;
		this.isVegetarian = isVegetarian;
		this.isLactoseFree = isLactoseFree;
	}
}
