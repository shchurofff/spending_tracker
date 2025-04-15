import React from "react";
import styles from "./expenses.module.css";

const Expenses = () => {
	return (
		<div className={styles.expense__container_wrapper}>
			<div className={styles.expense__container}>
				<h2 className={styles.expense__title}>
					Выберите из списка трату, которую хотите зафиксировать
				</h2>
				<div className={styles.expense__form}>
					<select className={styles.expense__select}>
						<option value=""  selected> </option>
						<option value="food">Еда</option>
						<option value="transport">
							Транспорт
						</option>
						<option value="entertainment">Развлечения</option>
					</select>

					<input
						type="number"
						placeholder="Сумма"
						min="0"
                        className={styles.expense__inp}
					/>
				</div>
                <button>Удалить</button>
			</div>
            <div className={styles.diagram}>
                <p>Тут будет диаграмма</p>
            </div>
		</div>
	);
};

export default Expenses;
