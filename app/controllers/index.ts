import * as $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


import {DanhSachGheServices} from '../services/DanhSachGheServices'
import {DanhSachGhe} from '../models/DanhSachGhe';
import {Ghe} from '../models/Ghe';
import '../assets/css/style.css';

import {ThongTinDatVe} from '../models/ThongTinDatVe';

$(document).ready(function() {

    let dsGheSerivces = new DanhSachGheServices();
    // dsGhe : là đối tượng của Protopye DanhSachGhe
    let dsGhe: DanhSachGhe = new DanhSachGhe();
    //
    let thongTinDatVe = new ThongTinDatVe();


    dsGheSerivces.LoadDanhSachGhe()
    .done(function(ketqua){ 
        console.log(ketqua);
        dsGhe.MangDanhSachGhe = ketqua.data;
        LoadDanhSachGhe(dsGhe.MangDanhSachGhe);
    })
    .fail(function(err){
        console.log(err);
    })

    // Hàm load danh sách ghê ra giao diện
    function LoadDanhSachGhe(mangDSGhe:Ghe[]){
        let noiDung = '';
        let i = 1;
        for(let ghe of mangDSGhe){
            if(ghe.TrangThai){
                noiDung +=`
                    <button class='btn ghe gheDuocDat'>${ghe.SoGhe}</button>
                `;
            }else{
                noiDung +=`
                    <button class='btn ghe' soghe='${ghe.SoGhe}' gia='${ghe.Gia}'>${ghe.SoGhe}</button>
                `;
            }
            if(i % 4 == 0){
                noiDung +=`<br />`;
            }
            i++;
        }
        $('#danhsachghe').html(noiDung);
    }

    $('body').delegate('.ghe','click', function(){
        let soGhe = $(this).attr('soghe');
        let gia = $(this).attr('gia');
        if($(this).hasClass('gheDaDat')){
            $(this).removeClass('gheDaDat');
            thongTinDatVe.XoaGhe(soGhe);
            console.log(thongTinDatVe.MangGheDuocDat);
        }
        else{
            $(this).addClass('gheDaDat');
            let ghe:Ghe = new Ghe(soGhe, gia, true);
            thongTinDatVe.ThemGheDat(ghe);
            console.log(thongTinDatVe.MangGheDuocDat);

        }
    })





}); //end jquery