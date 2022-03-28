export class AccountDto {
    constructor(obj?: any) {
        if(obj){
            this.username = obj['Username'] ? obj['Username'] : null;
            this.password = obj['Password'] ? obj['Password'] : null;
            this.tagLine = obj['Tag Line'] ? obj['Tag Line'] : null;
            this.gameName = obj['Game Name'] ? obj['Game Name'] : null;
            this.level = obj['Level'] ? Number(obj['Level']) : null;
            this.accountId = obj['Account ID'] ? Number(obj['Account ID']) : null;
            this.country = obj['Country'] ? obj['Country'] : null;
            this.nickName = obj['NickName'] ? obj['NickName'] : null;
            this.emailVerified = obj['EmailVerified'] ? (obj['EmailVerified'] === "Yes" ? true : false) : null;
            this.region = obj['Region'] ? obj['Region'] : null;
            this.email = obj['Email'] ? obj['Email'] : null;
            this.valorantPoint = obj['Valorant Point'] ? Number(obj['Valorant Point']) : null;
            this.radianitePoints = obj['Radianite Points'] ? Number(obj['Radianite Points']) : null;
            this.totalRecentGames = obj['TotalRecentGames'] ? Number(obj['TotalRecentGames']) : null;
            this.skins = obj['Skins'] ? this.getSkins(obj['Skins']) : null;
            this.checked = obj['Checked'] ? (obj['Checked'] === "Yes" ? true : false) : null;
        }
    }
    username: string;
    password: string;
    tagLine: string;
    gameName: string;
    level: number;
    accountId: number;
    country: string;
    nickName: string;
    emailVerified: boolean;
    region: string;
    email: string;
    valorantPoint: number;
    radianitePoints: number;
    totalRecentGames: number;
    skins: string[];
    checked: boolean;

    private getSkins(skins: string) {
        if( skins == '[]'){
            return [];
        }
        else {
            const result = skins.slice(1, -1).split(',').map(String);
            return result;
        }
    }
  }