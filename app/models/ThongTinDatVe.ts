import { Ghe } from "./Ghe";

export class ThongTinDatVe{
    public ThongTinNguoiDung:string;
    public MangGheDuocDat:Ghe[];
    constructor(){
        this.MangGheDuocDat = [];
    }
    ThemGheDat(ghe:Ghe):void{
        if(ghe.TrangThai){
            this.MangGheDuocDat.push(ghe);
        }
    }
    XoaGhe(soGhe:number){
        for(let i = 0; i < this.MangGheDuocDat.length;i++){
            if(this.MangGheDuocDat[i].SoGhe == soGhe){
                this.MangGheDuocDat.splice(i,1);
                return;
            }
        }
    }
}