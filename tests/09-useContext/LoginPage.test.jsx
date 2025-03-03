import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en <LoginPage />", () => {
  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("Debe de mostrar el componente con el usuario", () => {
    const user = {
      id: 123,
      name: "Juan",
      email: "hola@test.test",
    };

    render(
      <UserContext.Provider value={{ user }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(`${user.id}`);
  });

  test("debe de llamar el setUser cuando se hace click en el boton", () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const buttonElement1 = screen.getByRole("button");
    fireEvent.click(buttonElement1);
    expect(setUserMock).toHaveBeenCalledWith({
      email: "hola@test.test",
      id: 123,
      name: "Juan",
    });
  });
});
