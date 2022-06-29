function validateChar(event) {
  if (event.data.match(validChars)==null) {
    alert("Use somente letras");
    return false
  }else if (event.data.match(wrongChars)!=null) {
    alert("Você já usou esta letra")
    return false
  }else {
    return true;
  }

}

function isCharUsed(char) {
  if (wrongChars.indexOf(char)!=-1) {
    switch (char) {
      case A:

        break;
      case B:

        break;
      case C:

        break;
      case D:

        break;
      case E:

        break;
      case F:

        break;
      case G:

        break;
      case H:

        break;
      case I:

        break;
      case J:

        break;
      case K:

        break;
      case L:

        break;
      case M:

        break;
      case N:

        break;
      case O:

        break;
      case P:

        break;
      case Q:

        break;
      case R:

        break;
      case S:

        break;
      case T:

        break;
      case U:

        break;
      case V:

        break;
      case W:

        break;
      case X:

        break;
      case Y:

        break;
      case Z:

        break;
      default:

    }
  }
}
