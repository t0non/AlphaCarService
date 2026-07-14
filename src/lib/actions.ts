export type FormState = {
  message: string;
  probableCauses?: string[];
  troubleshootingSteps?: string[];
};

export async function getDiagnosticSuggestions(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  return {
    message: 'Indisponível no modo estático. Entre em contato pelo WhatsApp para diagnóstico.',
  };
}
