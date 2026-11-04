import { useEffect } from 'react';

const SITE_NAME = 'Hillberry Life Sciences';

export default function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Better Botanical Ingredients`;
  }, [title]);
}
