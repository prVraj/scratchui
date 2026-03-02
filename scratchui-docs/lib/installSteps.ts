export interface InstallStep {
  step: number
  title: string
  code: string
  lang: string
  hint: string
}

export function getInstallSteps(componentName: string, importLine: string): InstallStep[] {
  return [
    {
      step: 1,
      title: 'Install the package',
      code: 'npm install scratchui',
      lang: 'bash',
      hint: 'One package. No peer dependency essay required.',
    },
    {
      step: 2,
      title: 'Import the tokens',
      code: "// In your app root (layout.tsx or main.tsx)\nimport 'scratchui/tokens'",
      lang: 'tsx',
      hint: 'CSS custom properties wired up. Design system: unlocked.',
    },
    {
      step: 3,
      title: `Use the ${componentName}`,
      code: importLine,
      lang: 'tsx',
      hint: "That's it. You're done. Go tell your PM it's shipped.",
    },
  ]
}
