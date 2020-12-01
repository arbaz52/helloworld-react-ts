import { complement, darken, meetsContrastGuidelines } from "polished";
import React, { useCallback, useMemo } from "react";
import { Container, Section } from "../../elements/Container";
import { DotDotDot } from "../../elements/Polished";
import useInput from "../../hooks/useInput";
import { Input } from "antd";
const UsingDotDotDot = () => {
  const { state: lines, bindings: linesBindings } = useInput("0");
  return (
    <Section>
      <b>Using DotDotDot: lines: {lines}</b>
      <br />
      <Input type="range" min="0" max="10" {...linesBindings} />
      <br />
      <DotDotDot lines={parseInt(lines)}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit libero
        molestiae voluptatum rem saepe dolorum odio officiis praesentium quo
        delectus, omnis distinctio veritatis ab quod blanditiis. Magni
        temporibus ipsam libero ipsum quidem blanditiis molestias tempore dolor
        in dicta atque iusto distinctio quia nobis cumque, quaerat ea at
        dignissimos aut sint!
      </DotDotDot>
    </Section>
  );
};

const UsingComplement = () => {
  const { state: textColor, bindings: textColorBindings } = useInput("black");
  return (
    <Section>
      <b>Using Complement</b>
      <br />
      <input type="color" {...textColorBindings} />
      <br />
      <p style={{ color: textColor, backgroundColor: complement(textColor) }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur
        asperiores iste molestias ea? Dicta, reprehenderit dolorem cupiditate
        ipsam corrupti libero aspernatur, est laborum adipisci quod pariatur,
        natus omnis eaque? Nemo odio repellat velit corrupti non ea error
        deserunt quos, nisi suscipit, ratione iste aut sequi sint facilis sed
        voluptas!
      </p>
    </Section>
  );
};

const UsingDarken = () => {
  const { state: textColor, bindings: textColorBindings } = useInput("#ff0000");
  const { state: intensity, bindings: intensityBindings } = useInput("1");
  return (
    <Section>
      <b>UsingDarken</b>
      <br />
      <Input type="color" {...textColorBindings} />
      <br />
      <b>Darken:</b>
      <br />
      <label>Intensity:</label>
      <Input type="number" {...intensityBindings} min="0" max="1" step="0.1" />
      <br />
      <p style={{ color: textColor }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur
        asperiores iste molestias ea? Dicta, reprehenderit dolorem cupiditate
        ipsam corrupti libero aspernatur, est laborum adipisci quod pariatur,
        natus omnis eaque? Nemo odio repellat velit corrupti non ea error
        deserunt quos, nisi suscipit, ratione iste aut sequi sint facilis sed
        voluptas!
      </p>
      <p style={{ color: darken(intensity, textColor) }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur
        asperiores iste molestias ea? Dicta, reprehenderit dolorem cupiditate
        ipsam corrupti libero aspernatur, est laborum adipisci quod pariatur,
        natus omnis eaque? Nemo odio repellat velit corrupti non ea error
        deserunt quos, nisi suscipit, ratione iste aut sequi sint facilis sed
        voluptas!
      </p>
    </Section>
  );
};

const UsingMeetsCG = () => {
  const { state: textColor, bindings: textColorBindings } = useInput("#ff0000");
  const { state: textColor1, bindings: textColor1Bindings } = useInput(
    "#ff0000"
  );
  const scores = useMemo(() => meetsContrastGuidelines(textColor, textColor1), [
    textColor,
    textColor1
  ]);
  return (
    <Section>
      <b>UsingMeetsCG: Score: {JSON.stringify(scores)}</b>
      <br />
      <Input type="color" {...textColorBindings} />
      <Input type="color" {...textColor1Bindings} />
    </Section>
  );
};

const Polished = () => {
  return (
    <Container>
      <h1>Welcome to learning features of Polished.</h1>
      <UsingDotDotDot />
      <UsingComplement />
      <UsingDarken />
      <UsingMeetsCG />
    </Container>
  );
};

export default Polished;
