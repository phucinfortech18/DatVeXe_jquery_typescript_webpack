import * as $ from 'jquery';
export class DanhSachGheServices{
    constructor(){

    }
    LoadDanhSachGhe():any{
        const apiData:string = `../assets/data/DanhSachGhe.json`;
        return $.ajax({
            url:apiData,
            type:'GET'
        });
    }
}

// module.exports = {DanhSachGheServices:DanhSachGheServices};