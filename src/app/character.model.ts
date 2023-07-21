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
    public story: string
    public userId?: string | undefined

    constructor(name: string, armor: string, img: string, skills: number[], stats: Stat[], story: string, userId: string) {
        this.name = name;
        this.armor = armor;
        this.image = img;
        this.skillsList = skills;
        this.statList = stats;
        this.story = story;
        this.userId = userId
    }
}