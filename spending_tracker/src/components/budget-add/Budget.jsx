import React from "react";
import styles from "./budget.module.css";

const Budget = () => {
	return (
		<div className={styles.budget__wrapper}>
			<label for="budget-input">Введите ваш бюджет для учёта расходов</label>
			<div className={styles.inp__group}>
				<input
					type="text"
					id="budget-input"
					placeholder="Введите сумму"
				/>
				<button>Подтвердить</button>
			</div>
		</div>
	);
};

export default Budget;
