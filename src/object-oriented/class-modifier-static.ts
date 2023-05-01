// static (可共用的變數?): you can access them without creating an instance of the class.
class Bank {
  private static balance: number = 1000;
  static withdraw(money: number) {
    if (this.balance <= 0) return;
    this.balance -= money;
  }
  static getBalance() {
    return this.balance;
  }
}

function userAWithdraw(money: number) {
  Bank.withdraw(money);
  console.log(Bank.getBalance());
}

function userBWithdraw(money: number) {
  Bank.withdraw(money);
  console.log(Bank.getBalance());
}
userAWithdraw(200);
userAWithdraw(500);
