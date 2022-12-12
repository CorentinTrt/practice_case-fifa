import { createRef, useEffect, useState } from 'react';
import s from './modale.module.scss';

import convertInputToDate from '@utils/convertInputToDate';

import teams from '@constants/teams';
import players from '@constants/players';
import matchsHistory from '@constants/matchsHistory';
import findPlayers from '@utils/findPlayers';
import findTeam from '@utils/findTeam';
import checkAuthCodes from '@utils/checkAuthCode';

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

const Modal = (props: Props) => {
	const { isOpen, onClose } = props;

	const [state_error, setState_error] = useState({
		isError: false,
		message: '',
	});

	const ref_dataTeamA = createRef<HTMLSelectElement>();
	const ref_goalsTeamA = createRef<HTMLInputElement>();
	const ref_dataTeamB = createRef<HTMLSelectElement>();
	const ref_goalsTeamB = createRef<HTMLInputElement>();
	const ref_duration = createRef<HTMLInputElement>();
	const ref_date = createRef<HTMLInputElement>();
	const ref_confirmA = createRef<HTMLInputElement>();
	const ref_confirmB = createRef<HTMLInputElement>();
	const ref_authCodeA = createRef<HTMLInputElement>();
	const ref_authCodeB = createRef<HTMLInputElement>();

	useEffect(() => {
		if (!window) return;

		isOpen
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'auto');
	}, [isOpen]);

	const handleAddMatch = () => {
		if (!ref_confirmA.current?.checked || !ref_confirmB.current?.checked) {
			setState_error({
				isError: true,
				message: 'You have to check the litle boxes',
			});

			return;
		} else {
			setState_error({ isError: false, message: '' });
		}

		if (!ref_date.current?.value) return;
		const matchDate = convertInputToDate(ref_date.current?.value);
		if (!matchDate) return;

		console.log(matchDate);

		if (
			!ref_dataTeamA.current?.value ||
			!ref_goalsTeamA.current?.value ||
			!ref_dataTeamB.current?.value ||
			!ref_goalsTeamB.current?.value ||
			!ref_duration.current?.value
		)
			return;

		const matchData = {
			date: matchDate,
			idTeamA: ref_dataTeamA.current?.value.split(',')[0],
			labelTeamA: ref_dataTeamA.current?.value.split(',')[1],
			scoreTeamA: parseInt(ref_goalsTeamA.current?.value),
			idTeamB: ref_dataTeamB.current?.value.split(',')[0],
			labelTeamB: ref_dataTeamB.current?.value.split(',')[1],
			scoreTeamB: parseInt(ref_goalsTeamB.current?.value),
			duration: parseInt(ref_duration.current?.value),
		};

		const teamA = findTeam(ref_dataTeamA.current.value.split(',')[0]);
		if (!teamA) return;
		const playersTeamA = findPlayers(teamA);
		if (!playersTeamA) return;

		const teamB = findTeam(ref_dataTeamB.current.value.split(',')[0]);
		if (!teamB) return;
		const playersTeamB = findPlayers(teamB);
		if (!playersTeamB) return;

		if (!ref_authCodeA.current?.value || !ref_authCodeB.current?.value) return;

		if (
			!checkAuthCodes(playersTeamA, ref_authCodeA.current?.value) ||
			!checkAuthCodes(playersTeamB, ref_authCodeB.current.value)
		) {
			setState_error({
				isError: true,
				message: 'Wrong authentication code, is that really you ?',
			});
		} else {
			setState_error({ isError: false, message: '' });

			matchsHistory.push(matchData);

			onClose();
		}
	};

	const s_confirmationMessage =
		'I certify that the score is exact and that my controller had no problems';

	return isOpen ? (
		<div className={s['modal']}>
			<div className={s['content']}>
				<div className={s['close-button']} onClick={onClose}></div>

				<h2 className={s['title']}>Add a match</h2>

				<div className={s['inputs']}>
					<div className={s['side']}>
						<p className={s['label-team']}>Team A</p>
						<select id='teamA' name='teamA' ref={ref_dataTeamA}>
							<option value={''}>Choose a team</option>
							{teams.map((e, i) => (
								<option key={`team_${i}`} value={[e.id, e.label]}>
									{e.label}
								</option>
							))}
						</select>

						<p className={s['label-goals']}>Goals</p>
						<input name='goalTeamA' type={'number'} ref={ref_goalsTeamA} />
					</div>

					<div className={s['side']}>
						<p className={s['label-team']}>Team B</p>
						<select id='teamB' name='teamB' ref={ref_dataTeamB}>
							<option value={''}>Choose a team</option>
							{teams.map((e, i) => (
								<option key={`team_${i}`} value={[e.id, e.label]}>
									{e.label}
								</option>
							))}
						</select>

						<p className={s['label-goals']}>Goals</p>
						<input name='goalTeamB' type={'number'} ref={ref_goalsTeamB} />
					</div>
				</div>

				<div className={s['divider']}></div>

				<div className={s['details']}>
					<div className={s['side']}>
						<p className={s['label-duration']}>Duration</p>
						<input name='duration' type={'number'} ref={ref_duration} />
					</div>

					<div className={s['side']}>
						<p className={s['label-date']}>Date</p>
						<input name='date' type={'datetime-local'} ref={ref_date} />
					</div>
				</div>

				<div className={s['divider']}></div>

				<div className={s['confirmation']}>
					<div className={s['side']}>
						<input name='checkTeamA' type={'checkbox'} ref={ref_confirmA} />
						<span className={s['message']}>{s_confirmationMessage}</span>

						<div className={s['code']}>
							<p className={s['label']}>Authentication code</p>
							<input name='authCodeA' ref={ref_authCodeA} />
						</div>
					</div>

					<div className={s['side']}>
						<input name='checkTeamB' type={'checkbox'} ref={ref_confirmB} />
						<span className={s['message']}>{s_confirmationMessage}</span>

						<div className={s['code']}>
							<p className={s['label']}>Authentication code</p>
							<input name='authCodeB' ref={ref_authCodeB} />
						</div>
					</div>
				</div>

				<div className={s['button-confirmation']} onClick={handleAddMatch}>
					ADD MATCH
				</div>

				{state_error.isError && (
					<p className={s['error-message']}>{state_error.message}</p>
				)}
			</div>
		</div>
	) : (
		<></>
	);
};

export default Modal;
