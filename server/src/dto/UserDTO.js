export const UserGoal = Object.freeze({
    LOSE_FAT: "Lose fat",
    HIPERTROPHY: "Hipertrophy",
    CUTTING: "Cutting",
    BULKING: "Bulking",
    MAINTENANCE: "Maintenance"
});

export const UserRole = Object.freeze({
    USER: "USER",
    ADMIN: "ADMIN"
});

export class UserResponseDTO {
    constructor(user) {
        this.id = user._id,
        this.name = user.name,
        this.email = user.email,
        this.age = user.age,
        this.height  = user.height,
        this.weight = user.weight,
        this.goal = user.goal,

        this.dailyCaloriesGoal = user.dailyCaloriesGoal,
        this.dailyProteinGoal = user.dailyProteinGoal,
        this.dailyCarbsGoal = user.dailyCarbsGoal,
        this.dailyFatGoal = user.dailyFatGoal,

        this.role = user.role;
    }
}

export class CreateUserDTO {
    constructor(data) {
         this.id = data._id,
        this.name = data.name,
        this.email = data.email,
        this.age = data.age,
        this.height  = data.height,
        this.weight = data.weight,
        this.goal = data.goal
    }
}

