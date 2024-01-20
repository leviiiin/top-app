import { HhDataProps } from "./HhData.props";
import styles from './HhData.module.css';
import cn from 'classnames';
import { Card } from "..";
import { priceUa } from "@/helpers/helpers";

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card color='white' className={styles.count}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.countValue}>{count}</div>
            </Card>
            <Card color='white' className={styles.salary}>
                <div>
                    <div className={styles.title}>Начальный</div>
                    <div className={styles.salaryValue}>{priceUa(juniorSalary)}</div>
                    <div className={styles.rate}>
                        <i className={`bi bi-star-fill ${styles.filled}`}></i>
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Средний</div>
                    <div className={styles.salaryValue}>{priceUa(middleSalary)}</div>
                    <div className={styles.rate}>
                        <i className={`bi bi-star-fill ${styles.filled}`}></i>
                        <i className={`bi bi-star-fill ${styles.filled}`}></i>
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Профессионал</div>
                    <div className={styles.salaryValue}>{priceUa(seniorSalary)}</div>
                    <div className={styles.rate}>
                        <i className={`bi bi-star-fill ${styles.filled}`}></i>
                        <i className={`bi bi-star-fill ${styles.filled}`}></i>
                        <i className={`bi bi-star-fill ${styles.filled}`}></i>
                    </div>
                </div>
            </Card>
        </div>
    );
}