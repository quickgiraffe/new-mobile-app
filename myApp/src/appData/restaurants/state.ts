import { Area } from '../../appModels/Area';
import { Menu } from '../../appModels/Menu';
import { Restaurants } from '../../appModels/Restaurants';

export interface RestaurantCheck {
    searchText: string;
    loading?: boolean;
    menuActive: boolean;
    area: Area[];
    menus: Menu[];
    restaurants: Restaurants[];
}