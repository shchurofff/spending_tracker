import React from "react";
import styles from "./budget.module.css";

const Budget = () => {
	return (
		<div className={styles.budget__form__container}>
			<div className={styles.budget__form__card}>
				<h2 className={styles.budget__title}>
					Установите ваш бюджет для учёта трат
				</h2>
				<form className={styles.budget__form}>
					<div className={styles.input__container}>
						<span className={styles.currency}>₽</span>
						<input
							type="number"
							placeholder="0,00"
                            min="0"
							className={styles.amount__input}
						/>
					</div>

					<button type="submit" className={styles.submit__btn}>
						Подтвердить бюджет
					</button>
				</form>

				<div className={styles.hint}>
					<span>
						💡 Совет: Вводите реальную сумму, которую готовы тратить
					</span>
				</div>
			</div>
		</div>
	);
};

export default Budget;
