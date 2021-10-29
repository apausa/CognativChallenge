
import { selector } from 'recoil';
import recommendationService from '../../services/recommendationService';

const renderRecomendation = selector({
  key: 'RENDER_RECOMENDATION',
  get: () => recommendationService(),
})

export default renderRecomendation;