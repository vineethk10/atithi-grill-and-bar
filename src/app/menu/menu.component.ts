import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  snacks = [
    { name: 'Veg Pakoda', price: '6.99', description: 'Mix veg and chickpeas flour fritters.', image: 'link-to-image-veg-pakoda' },
    { name: 'Samosa Chat', price: '7.99', description: 'Savory vegetable samosas with tamarind and yogurt chutney and chickpeas.', image: 'link-to-image-samosa-chat' },
    { name: 'Samosa', price: '6.99', description: 'Crispy patties stuffed with spiced potatoes and peas.', image: 'link-to-image-samosa' },
    { name: 'Paneer Chilli', price: '9.99', description: 'Paneer cooked with onion and chilli peppers and sauces.', image: 'link-to-image-paneer-chilli' },
    { name: 'Paneer Tikka', price: '9.99', description: 'Homemade cheese spiced with herbs and spices and roasted in clay oven.', image: 'link-to-image-paneer-tikka' },
    { name: 'Papadum', price: '2.99', description: 'Crisp cracker made with lentil.', image: 'link-to-image-papadum' },
    { name: 'Chicken Chilli', price: '9.99', description: 'Boneless chicken cubes stir-fried with fresh chilli peppers and onions.', image: 'link-to-image-chicken-chilli' },
    { name: 'Gobi Manchurian', price: '9.99', description: 'Mixed vegetables fritters cooked in indo-chinese style.', image: 'link-to-image-gobi-manchurian' },
    { name: 'Chicken 65', price: '10.99', description: 'Fried boneless chicken thigh meat stir-fried with onions, garlic, curry leaf, herbs and spices.', image: 'link-to-image-chicken-65' },
    { name: 'Lamb Cheese', price: '12.99', description: 'Tender rolls of minced lamb spiced with spices and roasted in a claypot tandoor oven.', image: 'link-to-image-lamb-cheese' },
  ];

  naanItems = [
    { name: 'Plain Naan', price: '3.99', description: 'Traditional North Indian unleavened white flour bread.', image: 'link-to-image-plain-naan' },
    { name: 'Butter Naan', price: '4.50', description: 'Unleavened white flour bread baked with fresh garlic and cilantro.', image: 'link-to-image-butter-naan' },
    { name: 'Garlic Naan', price: '4.99', description: 'Tandoor baked flatbread infused with your choice of garlic, mint, or jalapeño then glazed with butter.', image: 'link-to-image-garlic-naan' },
    { name: 'Cheese Naan', price: '4.99', description: 'Tandoor baked flatbread infused with cheese.', image: 'link-to-image-cheese-naan' },
    { name: 'Tandoori Roti', price: '2.99', description: 'Round flatbread made with whole wheat flour then glazed with butter. * butter is optional if VEGAN.', image: 'link-to-image-tandoori-roti' },
    { name: 'Bullet Naan', price: '3.99', description: 'Unleavened white flour mixed with green chilies & fresh herbs.', image: 'link-to-image-bullet-naan' },
  ];

  vegEntrees = [
    { name: 'Palak Paneer', price: '15.99', description: 'Fresh spinach and cottage cheese cubes cooked in a creamy sauce.', image: 'link-to-image-palak-paneer' },
    { name: 'Malai Kofta', price: '17.99', description: 'Vegetable-based dumplings stuffed with potatoes, coconut, and cashews cooked in a creamy sauce.', image: 'link-to-image-malai-kofta' },
    { name: 'Saferon Paneer', price: '16.99', description: 'Delicious paneer cooked in a creamy saffron sauce.', image: 'link-to-image-saferon-paneer' },
    { name: 'Dal Makhni', price: '14.99', description: 'A variety of lentils, slow simmered and sautéed with fresh garlic, ginger, tomato, fresh herbs & spices.', image: 'link-to-image-dal-makhni' },
    { name: 'Dal Tadka', price: '13.99', description: 'Fresh yellow lentils cooked with fresh garlic, ginger, tomato, fresh herbs & spices.', image: 'link-to-image-dal-tadka' },
    { name: 'Bhindi Masala', price: '13.99', description: 'Fresh baby okra pieces sautéed with onion, tomato, green pepper, cilantro, fresh herbs & spices.', image: 'link-to-image-bhindi-masala' },
    { name: 'Chana Masala', price: '13.99', description: 'Garbanzo beans and diced potatoes cooked in a North Indian style sauce.', image: 'link-to-image-chana-masala' },
    { name: 'Aloo Gobi Matar', price: '12.99', description: 'Cauliflower, Fresh peas & Potatoes cooked with onion, tomato herbs & spices on a high heat.', image: 'link-to-image-aloo-gobi-matar' },
    { name: 'Baingan Masala', price: '13.99', description: 'Eggplant sautéed with onions, tomatoes, garlic, ginger, fresh herbs & spices.', image: 'link-to-image-baingan-masala' },
    { name: 'Paneer Butter Masala', price: '14.99', description: 'Cheese cubes cooked in an appetizing tomato and butter sauce with fresh herbs & spices.', image: 'link-to-image-paneer-butter-masala' },
  ];

  chickenLambSeafoodEntrees = [
    { name: 'Chicken Tikka Masala', price: '15.99', description: 'Tender marinated chicken breast pieces skewer cooked in our tandoor & simmered in a creamy tomato sauce.', image: 'link-to-image-chicken-tikka-masala' },
    { name: 'Butter Chicken', price: '16.99', description: 'Tandoor grilled boneless chicken cubes, cooked in a creamy sauce, fresh spices, and herbs giving it a sweeter taste.', image: 'link-to-image-butter-chicken' },
    { name: 'Chicken Curry', price: '14.99', description: 'Traditional bone-in or boneless chicken curry seasoned with spices, herbs, ginger, garlic, onion, and tomato sauce.', image: 'link-to-image-chicken-curry' },
    { name: 'Chicken Kadai', price: '13.99', description: 'Boneless chicken pieces cooked with sliced onions, green peppers, tomatoes, fresh ginger, garlic and spices.', image: 'link-to-image-chicken-kadai' },
    { name: 'Chicken Korma', price: '13.50', description: 'Boneless chicken cubes curried in mild creamy cashew sauce, herbs, and a touch of spices.', image: 'link-to-image-chicken-korma' },
    { name: 'Goat Curry', price: '19.99', description: 'Traditional bone-in goat curry seasoned with spices, herbs, ginger, garlic, onion, and tomato sauce.', image: 'link-to-image-goat-curry' },
    { name: 'Saffron Lamb', price: '17.99', description: 'Tender lamb cooked with saffron, herbs, and spices.', image: 'link-to-image-saffron-lamb' },
    { name: 'Lamb Rogan Josh', price: '16.99', description: 'Tender lamb cubes cooked with fresh onion and tomatoes with a touch of herbs and spices.', image: 'link-to-image-lamb-rogan-josh' },
    { name: 'Lamb Vindaloo', price: '16.99', description: 'Tender pieces of lamb and potatoes in a luscious fusion of red chilies, vinegar, herbs, and spices.', image: 'link-to-image-lamb-vindaloo' },
    { name: 'Lamb Korma', price: '16.99', description: 'Tender meat pieces cooked in a cashew nut and almonds paste enriched with fresh cream.', image: 'link-to-image-lamb-korma' },
    { name: 'Salmon Masala', price: '19.99', description: 'Roasted salmon cube, slowly simmered in tomato cream sauce.', image: 'link-to-image-salmon-masala' },
    { name: 'Shrimp Curry', price: '20.99', description: 'Shrimp cooked in tomato, mustard seeds, garlic, curry leaf, coconut milk, and spices.', image: 'link-to-image-shrimp-curry' },
  ];

  himalayas = [
    { name: 'Chicken 8848', price: '16.99', description: 'Chicken marinated and grilled on tandoor, seasoned with a blend of Himalayan spices, coconut milk and chopped tomatoes.', image: 'link-to-image-chicken-8848' },
    { name: 'Shrimp 8848', price: '18.99', description: 'Shrimp marinated and grilled on oven clay, seasoned with a blend of Himalayan spices, coconut milk and chopped tomatoes.', image: 'link-to-image-shrimp-8848' },
    { name: 'Chowmin (Chicken/Veg)', price: '(11.99/10.99)', description: 'Stir fried noodles tossed with fresh vegetables and choice of protein.', image: 'link-to-image-chowmin' },
    { name: 'Momo (Chicken/Veg)', price: '(9.99/8.99)', description: 'Mixed vegetables steamed dumpling served with tomato achar.', image: 'link-to-image-momo' },
    { name: 'Jhol Momo (Chicken/Veg)', price: '(10.99/9.99)', description: 'Mixed vegetables steamed dumpling served with a sauce containing peanuts and tomato paste.', image: 'link-to-image-jhol-momo' },
    { name: 'Piro Alo', price: '6.99', description: 'Boiled potatoes mixed and tossed in spicy Himalayan spices.', image: 'link-to-image-piro-alo' },
    { name: 'Chicken Sadheko', price: '11.99', description: 'Chicken marinated and skewed in clay oven and tossed in Himalayan spices.', image: 'link-to-image-chicken-sadheko' },
    { name: 'Mustang Alo', price: '8.99', description: 'Potatoes fried and tossed with Himalayan spices.', image: 'link-to-image-mustang-alo' },
    { name: 'Sukuti', price: '14.99', description: 'A traditional dried meat dish of Nepal, spiced and mixed with garlic, ginger and other spices.', image: 'link-to-image-sukuti' },
    { name: 'Bhuttan', price: '12.99', description: 'Crispy, stir-fried goat intestines, tossed with ginger, garlic and other spices.', image: 'link-to-image-bhuttan' },
    { name: 'Akabare Chicken Wings', price: '10.99', description: 'Fried chicken wings, mixed with Nepal’s chili sauce called akabare.', image: 'link-to-image-akabare-chicken-wings' },
    { name: 'Peanut Sadheko', price: '6.99', description: 'Peanut mixed with ginger, garlic, mustard oil and other Himalayan spices.', image: 'link-to-image-peanut-sadheko' },
  ];

  biryaniRice = [
    { name: 'Vegetables Biryani', price: '15.99', description: 'Naturally fragrant basmati rice steam cooked with fresh garden vegetables and exotic spices.', image: 'link-to-image-vegetables-biryani' },
    { name: 'Lamb Biryani', price: '17.99', description: 'Juicy lean pieces of lamb, cooked with basmati rice and spices garnished with nuts.', image: 'link-to-image-lamb-biryani' },
    { name: 'Chicken Biryani', price: '14.99', description: 'Chicken marinated with spices and saffron, then steam cooked with basmati rice & garnished with cashews and raisins.', image: 'link-to-image-chicken-biryani' },
    { name: 'Shrimp Biryani', price: '18.99', description: 'Long grain basmati rice and jumbo shrimp cooked with a unique blend of spices and nuts.', image: 'link-to-image-shrimp-biryani' },
    { name: 'Goat Biryani', price: '17.99', description: 'Fresh goat (with bone) cooked with basmati rice, herbs, spices, cilantro and nuts.', image: 'link-to-image-goat-biryani' },
    { name: 'Plain Basmati Rice', price: '3.99', description: 'Steamed Long Grain Basmati Rice.', image: 'link-to-image-plain-basmati-rice' },
    { name: 'Jeera Rice', price: '5.99', description: 'Long Grain Basmati Rice cooked with cumin seeds and butter.', image: 'link-to-image-jeera-rice' },
  ];

  sides = [
    { name: 'Raita', price: '3.99', description: 'Refreshing yogurt with shredded cucumbers, roasted cumin and herbs.', image: 'link-to-image-raita' },
    { name: 'Plain Yogurt', price: '2.99', description: 'Homemade plain yogurt.', image: 'link-to-image-plain-yogurt' },
    { name: 'Mint Chutney', price: '2.99', description: 'Tangy & mildly spiced cilantro and herbs.', image: 'link-to-image-mint-chutney' },
  ];

  desserts = [
    { name: 'Rasmalai', price: '5.99', description: 'Delicious Indian dessert made from cottage cheese soaked in sweetened milk.', image: 'link-to-image-rasmalai' },
    { name: 'Gulab Jamun', price: '5.99', description: 'Sweet deep-fried dumplings soaked in rose-flavored sugar syrup.', image: 'link-to-image-gulab-jamun' },
  ];

  drinks = [
    { name: 'Sweet Lassi', price: '4.99', description: 'Delicious soothing sweet yogurt smoothie.', image: 'link-to-image-sweet-lassi' },
    { name: 'Mango Lassi', price: '5.99', description: 'Delicious soothing sweet yogurt smoothie flavored with Mango.', image: 'link-to-image-mango-lassi' },
    { name: 'Salty Lassi', price: '4.99', description: 'Delicious soothing salty yogurt smoothie.', image: 'link-to-image-salty-lassi' },
  ];
}
