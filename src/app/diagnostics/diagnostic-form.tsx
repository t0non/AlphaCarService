'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, X } from 'lucide-react';
import { useState } from 'react';

export default function DiagnosticForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [dataUris, setDataUris] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(prev => [...prev, ...selectedFiles]);
    selectedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setDataUris(prev => [...prev, e.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setDataUris(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Card>
        <div className="p-6">
          <CardHeader className="p-0">
            <CardTitle>Informações do Veículo e Sintomas</CardTitle>
            <CardDescription>
              Envie os detalhes e entre em contato para diagnóstico com nossa equipe.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-0 pt-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="make">Marca</Label>
                <Input id="make" name="make" placeholder="Ex: Honda" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model">Modelo</Label>
                <Input id="model" name="model" placeholder="Ex: Civic" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="symptoms">Sintomas</Label>
              <Textarea
                id="symptoms"
                name="symptoms"
                placeholder="Descreva o problema em detalhes."
                rows={5}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="media">Fotos ou Vídeos (Opcional)</Label>
              <div className="flex items-center justify-center w-full">
                <label htmlFor="media-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-secondary hover:bg-muted">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-3 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Clique para enviar</span> ou arraste e solte</p>
                    <p className="text-xs text-muted-foreground">Imagens ou vídeos do problema</p>
                  </div>
                  <Input id="media-upload" name="media" type="file" className="hidden" onChange={handleFileChange} multiple accept="image/*,video/*" />
                </label>
              </div>
              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  <h4 className="font-medium">Arquivos selecionados:</h4>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {files.map((file, index) => (
                      <li key={index} className="relative text-sm text-muted-foreground p-2 border rounded-md bg-secondary flex items-center justify-between">
                        <span className="truncate w-4/5">{file.name}</span>
                        <Button type="button" variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeFile(index)}>
                          <X className="h-4 w-4"/>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button asChild className="h-12">
                <a href="https://wa.me/5531998935665?text=Olá,%20quero%20um%20diagnóstico%20para%20meu%20veículo." target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="h-12 border-primary/50 text-primary hover:bg-primary/10">
                <a href="tel:+5531998935665">
                  Ligue agora
                </a>
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
