import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nTests from 'shared/config/i18n/i18nTests';

interface RenderComponentOptions {
  route?: string;
}

export function renderComponent(
  component: ReactNode,
  options: RenderComponentOptions = {},
) {
  const { route = '/' } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nTests}>{component}</I18nextProvider>
    </MemoryRouter>,
  );
}
