import { Htag, Tag, P, Button, Rating, Card, Advantages, Sort, Product } from "@/components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import { HhData } from "@/components/HhData/HhData";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { SortEnum } from "@/components/Sort/Sort.props";
import { sortReducer } from "./sort.reducer";
import { useEffect, useReducer } from "react";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

    const setSort = (sort: SortEnum) => {
        dispathSort({ type: sort });
    };

    useEffect(() => {
        dispathSort({ type: 'reset', initialState: products });
    }, [products]);

    return (
        <div className={styles.wrapper}>

            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {products && <Tag color='gray' className={styles.tag} size='m'>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort} />
            </div>

            <div>
                {sortedProducts && sortedProducts.map(p => (
                    <Product
                        layout
                        key={p._id}
                        product={p}
                    />
                ))}
            </div>

            <div className={styles.hhTitle}>
                <Htag tag="h2">Вакансии - {page.category}</Htag>
                <Tag color='red' className={styles.tag} size='m'>dou.ua</Tag>
            </div>

            {firstCategory == TopLevelCategory.Courses && page.hh &&
                <HhData {...page.hh} />
            }

            <Htag tag='h2'>Преимущиства</Htag>
            {page.advantages && page.advantages.length > 0 &&
                <>
                    <Advantages advantages={page.advantages} />
                </>
            }

            {page.seoText &&
                <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />
            }

            <Htag tag='h2'>Получаемые навыки</Htag>
            {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}

        </div>
    );
}