class DateUtil {
  private static pad(num: number): string {
    return num.toString().padStart(2, '0');
  }

  public static toString(date: Date): string {
    const day = DateUtil.pad(date.getDate());
    const month = DateUtil.pad(date.getMonth());
    const year = DateUtil.pad(date.getFullYear());
    const hours = DateUtil.pad(date.getHours());
    const minutes = DateUtil.pad(date.getMinutes());
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
}

export default DateUtil;
