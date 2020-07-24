import { subMenuTypes } from './constants';
import { dummyMenu } from 'src/utility/dummy-json';

let menus: any = [...dummyMenu];

export const setMenu = menu => {
	const { menuType, subMenuType, category, price, name, available, code } = menu;
	const items = [{ category, price, name, available, code }];
	const menuIndex = menus.findIndex(item => item.name === menuType)
	if (menuIndex === -1) {
		menus.push({
			name: menuType,
			subMenuType: [
				{
					name: subMenuType,
					items
				}],
		});
	} else {
		const itemIndex = menus[menuIndex].subMenuType && menus[menuIndex].subMenuType.findIndex(item => item.name === subMenuType)
		itemIndex > -1
			? menus[menuIndex].subMenuType[itemIndex].items.push(items[0])
			: menus[menuIndex].subMenuType.push({ name: subMenuType, items: items });
	}
}

export const getMenu = () => menus;

export const updateMenu = (menuName, subMenu) => {
	const menuIndex = menus.findIndex(m => m.name === menuName)
	const subMenuIndex = menus[menuIndex].subMenuType.findIndex(sb => sb.name === subMenu.name);
	menus[menuIndex].subMenuType[subMenuIndex] = subMenu;
}