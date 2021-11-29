import { Component, Input, OnInit } from '@angular/core';
import { PersistenceService } from '../shared/persistence.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  category: string = 'Square Enix • Ação e aventura';
  cartItems: any[] = [];
  
  items: any[] = [
    {
      name: 'Life is Strange',
      price: 39.90,
      description: 'Life is Strange é um jogo em formato episódico dividido em cinco capítulos que se propõe a revolucionar os enredos baseados em escolhas e consequências nos videojogos ao permitir que o jogador faça recuar o tempo para afetar o passado, o presente e o futuro.',
      imagePath: 'https://upload.wikimedia.org/wikipedia/pt/e/e3/LifeIsStrangeCapa.jpg',
    },
    {
      name: 'Life is Strange: Before the Storm',
      price: 63,
      description: 'Chloe Price, uma rebelde de 16 anos faz uma amizade inesperada com Rachel Amber, uma garota popular destinada ao sucesso. Quando o mundo de Rachel é abalado por um segredo de família, sua nova aliada é quem dá força para que juntas enfrentem seus demônios.',
      imagePath: 'https://image.api.playstation.com/cdn/UP0082/CUSA08479_00/X5nEVc4Ey9FzYI7fI6TVMo9RxOj8dcFJ.png'
    },
    {
      name: 'Life is Strange 2',
      price: 96,
      description: 'Após um trágico incidente, os irmãos Sean e Daniel Diaz fogem de casa. Com medo da polícia e tendo que esconder o novo poder telecinético de Daniel, os dois partem rumo ao México em busca de segurança.',
      imagePath: 'https://upload.wikimedia.org/wikipedia/pt/9/91/Life_Is_Strange_2_capa.png'
    },
    {
      name: 'Life is Strange: True Colors',
      price: 259.95,
      description: 'Alex Chen reprime a "maldição" que a assola: a habilidade sobrenatural de vivenciar, absorver e manipular as fortes emoções de outras pessoas, que aparecem para ela como auras coloridas e vibrantes.',
      imagePath: 'https://upload.wikimedia.org/wikipedia/pt/9/90/LIS_True_Colors_capa.png'
    }
  ];

  constructor(private persistenceService: PersistenceService) {
    this.cartItems = this.persistenceService.loadFromLocalStorage();
   }

  ngOnInit(): void {
  }

  addToCart(item: any): void {
    const existingItem = this.cartItems.find(existingItem => existingItem.name === item.name);

    item = {...item, quantity: 1 };

    !existingItem
      ? this.cartItems = [...this.cartItems, item]
      : existingItem.quantity++;

    this.persistenceService.saveToLocalStorage(this.cartItems);
    alert('Item adicionado ao carrinho!');
  }
}
