import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './dashboard.module.css';
import Notes from '../../components/notes/notes';

export default function DashboardPage() {
	const userCredentials = JSON.parse(localStorage.getItem('userCredentials'));
	const selectedCategories = JSON.parse(localStorage.getItem('selectedCategories'));
	console.log(userCredentials);

	const { isAuthenticated } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthenticated) {
			navigate('/login');
		}
	});

	return (
		<>
			<div className={styles.container}>
				<div className={styles.left}>
					<div className={styles.topLeft}>
						<div className={styles.topLeft__left}>
							<div className={styles.profile}>
								<div className={styles.imageBox}>
									<img src='images/avatar.png' alt='avatar' />
								</div>
								<div className={styles.info}>
									<h2 className={styles.secondaryHeading}>
										{userCredentials.name}
									</h2>
									<h2 className={styles.secondaryHeading}>
										{userCredentials.email}
									</h2>
									<h1 className={styles.primaryHeading}>
										{userCredentials.userName}
									</h1>
									<div className={styles.categories}>
										{selectedCategories.map((category) => {
											return (
												<div
													key={category.id}
													className={styles.categoryBox}
												>
													{category.name}
												</div>
											);
										})}
									</div>
								</div>
							</div>
							<div className={styles.weather}>
								<div className={styles.dateTimeBar}>2-20-2023</div>
								<div className={styles.weatherInfo}>
									<div>
										<div className={styles.iconBox}>
											<img src='images/weatherIcon.png' alt='' />
										</div>
										Heavy Rain
									</div>
									<div className={styles.flexBox_C}>
										24* c
										<div className={styles.flexBox_R}>
											<div
												className={`${styles.iconBox} ${styles.flexBox_R} `}
											>
												<img src='images/pressureBarIcon.png' alt='' />
											</div>
											<div>sdfas</div>
										</div>
									</div>

									<div>
										<div className={styles.flexBox_C}>
											<div className={styles.flexBox_R}>
												<div className={styles.iconBox}>
													<img src='images/weatherIcon.png' alt='' />
												</div>
												3.7Km/h wind
											</div>
											<div className={styles.flexBox_R}>
												<div className={styles.iconBox}>
													<img src='images/weatherIcon.png' alt='' />
												</div>
												83% humidity
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<Notes />
					</div>

					<div className={styles.timer}></div>
				</div>
				<div className={styles.right}>
					<div className={styles.news}></div>
				</div>
			</div>
		</>
	);
}
