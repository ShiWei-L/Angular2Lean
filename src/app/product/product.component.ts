import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products:Array<Product>;
  private imgUrl="http://iph.href.lu/320x150";

  constructor() { }

  ngOnInit() {
    this.products=[
      new Product(1,"第一个商品",1.99,3.5,"这是第一个商品用于测试",["图书产品"]),
      new Product(2,"第二个商品",1.99,2.5,"这是第二个商品用于测试",["电子产品"]),
      new Product(3,"第三个商品",1.99,4.5,"这是第三个商品用于测试",["硬件设备"]),
      new Product(4,"第四个商品",1.99,3.5,"这是第四个商品用于测试",["电子产品","数码产品"]),
      new Product(5,"第五个商品",1.99,1.5,"这是第五个商品用于测试",["数码产品"]),
      new Product(6,"第六个商品",1.99,2.5,"这是第六个商品用于测试",["生活用品"])
    ]
  }

}

export class Product{
  constructor(
    public id :number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categroies:Array<string>
  ){

  }
}
