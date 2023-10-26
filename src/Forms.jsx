import React from "react";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

function DefaultForm() {
  return (
    <form className="flex max-w-md w-500 flex-col gap-4 ">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Email" />
        </div>
        <TextInput
          id="email1"
          placeholder="nome@exemplo.com"
          required
          type="email"
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Residencial</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Comercial</Label>
      </div>
      <div className="max-w-md" id="textarea">
        <Textarea
          id="comment"
          placeholder="Conta sua ideia pra gente..."
          required
          rows={4}
        />
      </div>
      <Button type="submit">Enviar</Button>
    </form>
  );
}

export default DefaultForm;
