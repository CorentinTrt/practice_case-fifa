import { Player } from '@constants/players';

const checkAuthCodes = (players: Player[], authCode: string): boolean => {
	for (let player of players) {
		if (player.authCode === authCode) return true;
	}

	return false;
};

export default checkAuthCodes;
