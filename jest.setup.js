// i18next를 모든 test 파일에서 사용
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}))
