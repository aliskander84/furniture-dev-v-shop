import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {IImage} from 'ng-simple-slideshow';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  imageUrls: (string | IImage)[] = [

    // {url: 'assets/img/frn01.jpg'},
    {url: 'assets/img/frn02.jpg'},
    {url: 'assets/img/frn03.jpg'},
    {url: 'assets/img/frn04.jpg'},
    {url: 'assets/img/frn05.jpg'},
    {url: 'assets/img/frn06.jpg'},
    {url: 'assets/img/frn07.jpg'},
    {url: 'assets/img/frn08.jpg'},
    {url: 'assets/img/frn09.jpg'},
    {url: 'assets/img/frn10.jpg'},
    {url: 'assets/img/frn11.jpg'},
    {url: 'assets/img/frn12.jpg'},
    {url: 'assets/img/frn13.jpg'},
    {url: 'assets/img/frn14.jpg'},
    {url: 'assets/img/frn15.jpg'},
    {url: 'assets/img/frn16.jpg'},
    {url: 'assets/img/frn17.jpg'},
    {url: 'assets/img/frn18.jpg'},
    {url: 'assets/img/frn19.jpg'},
    {url: 'assets/img/frn20.jpg'},
    {url: 'assets/img/frn21.jpg'},
    {url: 'assets/img/frn22.jpg'},
    {url: 'assets/img/frn23.jpg'},
    {url: 'assets/img/frn24.jpg'},
    // {
    //   url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg',
    //   caption: 'The first slide',
    //   href: '#config'
    // },
    // {
    //   url: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg',
    //   clickAction: () => alert('custom click function')
    // },
    // {
    //   url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg',
    //   caption: 'Apple TV',
    //   href: 'https://www.apple.com/'
    // },
    // 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56674755/mr_pb_is_the_best.0.jpg'
    // , { url: 'assets/kitties.jpg', backgroundSize: 'contain', backgroundPosition: 'center' }
  ];
  showDots = true;
  dotColor = 'red';

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

}
