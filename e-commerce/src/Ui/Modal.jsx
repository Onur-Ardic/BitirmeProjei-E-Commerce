import { useEffect, useContext } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { MainContext } from "../Context";
import "./Modal.css";

function ModalMenu() {
  const { email, setEmail, openModal, setOpenModal, isModalOpen } =
    useContext(MainContext);

  useEffect(() => {
    setOpenModal(isModalOpen);
  }, [isModalOpen]);

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  return (
    <>
      <Modal
        className="Modal-Menu"
        show={openModal}
        size="md"
        onClose={onCloseModal}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Collection Store Giriş
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Mail Adresiniz" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Şifreniz" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Beni Hatırla</Label>
              </div>
              <a
                href="#"
                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Şifremi Kaybettim
              </a>
            </div>
            <div className="w-full">
              <Button>Siteye giriş yap</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Üye Değil misin?&nbsp;
              <a
                href="#"
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Hesap Oluştur
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalMenu;
