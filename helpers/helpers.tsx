import { FirstLevelMenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";

const CoursesIcon = 'bi bi-mortarboard-fill';
const ServicesIcon = 'bi bi-cloud-fill';
const BooksIcon = 'bi bi-journal-bookmark-fill';
const ProductsIcon = 'bi bi-box-seam-fill';


export const firstLevelMenu: FirstLevelMenuItem[] = [
    {
        route: 'courses',
        name: 'Курсы',
        icon: <i className={`${CoursesIcon}`}></i>,
        id: TopLevelCategory.Courses
    },
    {
        route: 'services',
        name: 'Сервисы',
        icon: <i className={`${ServicesIcon}`}></i>,
        id: TopLevelCategory.Services
    },
    {
        route: 'books',
        name: 'Книги',
        icon: <i className={`${BooksIcon}`}></i>,
        id: TopLevelCategory.Books
    },
    {
        route: 'products',
        name: 'Продукты',
        icon: <i className={`${ProductsIcon}`}></i>,
        id: TopLevelCategory.Products
    }
];

export const priceUa = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₴');

export const declOfNum = (number: number, titles: [string, string, string]): string => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number %10 < 5) ? number % 10 : 5]];
}