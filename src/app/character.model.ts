interface Stat {
    name: string;
    value: number;
    statPoints: number;
}
export class Character {
    public name: string;
    public armor: string;
    public image: string;
    public skillsList: number[]
    public statList: Stat[];

    constructor(name: string, armor: string, img: string, skills: number[], stats: Stat[]) {
        this.name = name;
        this.armor = armor;
        this.image = img;
        this.skillsList = skills;
        this.statList = stats;
    }
}