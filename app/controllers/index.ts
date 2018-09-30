import * as $ from 'jquery';
import {DanhSachGheServices} from '../services/DanhSachGheServices'
$(document).ready(function() {

    let dsGheSerivces = new DanhSachGheServices();
    dsGheSerivces.LoadDanhSachGhe().done(function(data){ 
        console.log(data);
    })

});