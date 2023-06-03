
export class Character {
    public name: string;
    public armor: string;
    public image: string;
    public skillsList: number[]
    public statList: number[];

    constructor(name: string, armor: string, img: string, skills: number[], stats: number[]) {
        this.name = name;
        this.armor = armor;
        this.image = img;
        this.skillsList = skills;
        this.statList = stats;
    }
}