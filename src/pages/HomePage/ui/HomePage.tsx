import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <BugButton />

      <Counter />

      {t('Home page')}
      {t('Information')}
    </div>
  );
};

export default HomePage;
